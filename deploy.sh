"==============================================================${norm}"

cd dist

echo
echo ${osStatus} "${yellow}=============================================================="
echo ${osStatus} " 初始化 Git 與加入 Commit "
echo ${osStatus} "==============================================================${norm}"

git init
git add .
git commit -m "update `date +'%Y-%m-%d %H:%M:%S'`";
git branch -M $branchName

echo
echo ${osStatus} "${yellow}=============================================================="
echo ${osStatus} " 部署檔案到遠端分支 "
echo ${osStatus} " ＊如要停止動作請按下 CRTL + C or Control + C"
echo ${osStatus} "==============================================================${norm}"

git push -f $originUrl $branchName:gh-pages

echo
echo ${osStatus} "${yellow}=============================================================="
echo ${osStatus} " 部署完成 "
echo ${osStatus} "==============================================================${norm}"

echo
echo ${osStatus} "${lgreen}=============================================================="
echo ${osStatus} " 一鍵部署指令結束 "
echo ${osStatus} "==============================================================${norm}"

