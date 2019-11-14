#!/bin/bash
#
#############################################
# author:Ellen
# describes:自动化部署tomcat项目
#           请在jenkins项目下执行此脚本
# version:v1.0
# updated:20170606
#############################################
#
# 需要部署的位于jenkins项目下的war包相对路径
program_path=$1
# war包名称
program_name=`basename $program_path`
# tomcat项目部署的路径
project_path=$2
project_root_path=$project_root_path
# tomcat家目录
tomcat_home=$3
# 需要替换项目配置文件的源路径
configure_path=$4
# 备份路径
backup_path=/data/backup

# 仅限指定用户运行本脚本
if [ $EUID != "0" ];then
    echo "Please use root run script!!!"
    exit 1
fi

#限制位置参数个数
if [ $# -lt 3 -o $# -gt 4 ];then
    echo "请输入3个或者4个需要传入脚本的位置参数，并以空格隔开。"
    echo "分别为：需要部署的位于jenkins项目下的war包相对路径 tomcat项目部署的路径 tomcat家目录 需要替换项目配置文件的源路径[可选]"
    exit 1
fi

# 删除旧备份
Del_backup()
{
    # 保留备份文件天数
    save_days=7
    if [ -d $backup_path ];then
        find $backup_path -mtime +$save_days -exec rm -rf {} \;
    fi
}

# 备份tomcat项目
Bacukup()
{
    # 备份后的路径
    backup_dir=${backup_path}/`date +%Y%m%d`
    if [ ! -d $backup_dir ];then
        mkdir -p $backup_dir
    fi
    cd $project_path
    # 打包tomcat项目
    jar -cf ROOT.war ROOT
    mv ROOT.war $backup_dir
    cd -
}

# 重启程序
Restart()
{
    num1=`ps aux|grep -w "$tomcat_home"|grep -Evw "bash|grep|vim|vi|mv|cp|scp|cat|dd|tail|head|script|ls|echo|sys_log|logger|tar|rsync|ssh"|wc -l`
    if [ $num1 -ne 0 ];then
        bash ${tomcat_home}/bin/shutdown.sh &> /dev/null
    fi
    sleep 5
    num2=`ps aux|grep -w "$tomcat_home"|grep -Evw "bash|grep|vim|vi|mv|cp|scp|cat|dd|tail|head|script|ls|echo|sys_log|logger|tar|rsync|ssh"|wc -l`
    if [ $num2 -eq 0 ];then
        bash ${tomcat_home}/bin/startup.sh &> /dev/null
        ps aux|grep -w "$tomcat_home"|grep -Evw "bash|grep|vim|vi|mv|cp|scp|cat|dd|tail|head|script|ls|echo|sys_log|logger|tar|rsync|ssh"
    else
        pid=`ps aux|grep -w "$tomcat_home"|grep -Evw "bash|grep|vim|vi|mv|cp|scp|cat|dd|tail|head|script|ls|echo|sys_log|logger|tar|rsync|ssh"|awk {'print $2'}`
        kill $pid
        sleep 5
        bash ${tomcat_home}/bin/startup.sh &> /dev/null
        ps aux|grep -w "$tomcat_home"|grep -Evw "bash|grep|vim|vi|mv|cp|scp|cat|dd|tail|head|script|ls|echo|sys_log|logger|tar|rsync|ssh"
    fi
}

# 备份项目并删除旧备份
if [ -d $project_root_path ];then
    Bacukup
    Del_backup
    rm -rf $project_root_path/*
fi

 将war包拷贝至tomcat项目路径
if [ -e ${program_path} ];then
    cp $program_path $project_root_path/
fi

# 解压war包
if [ -d $project_root_path ];then
    cd $project_root_path
    jar -xf $program_name
fi

# 如果需要替换配置文件则先进行替换，再重启程序，否则直接重启程序
if [ -z $configure_path ];then
    rm -f $program_name
    Restart
else
    cp -r ${configure_path}/* $project_root_path/
    rm -f $program_name
    Restart
fi