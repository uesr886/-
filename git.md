1. git status   查看本地仓库的状态
2. git add .    将代码提交到git暂存区
3. git commit -m "xxx"  确认提交
4. git push origin master    将代码推送到远程仓库

5.git pull origin master   当远程代码和本地代码有冲突时，将远程同步到本地


git push github main  将代码提交到GitHub仓库
6.git config --global alias.pushall '!git push origin && git push github'  同时推送至两个仓库
然后，只需运行以下命令即可同时推送：git pushall

