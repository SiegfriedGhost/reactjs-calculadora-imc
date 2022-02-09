# Compartilhando no GitHub
## Inicializar Repositório Git 
```VIM
git init
```
## Configurando Username e Email 
```VIM
git config user.name = "Leandro de Oliveira Torres Santos"
git config user.email = "leanots86@gmail.com"
```
## Gerar chave SSH para comitar 
```VIM
ssh-keygen -t rsa -C "leanots86@gmail.com"
```
# Resumo

# Configuração GIT 

1. git config --global user.name "Nome Sobrenome"
2. git config --global user.email "seu_email@email.com"

# Configuração Github 
1. ssh-keygen -t rsa -C "seu_email@email.com"
2. Digite uma senha 
3. notepad ~/.ssh/id_rsa.pub 
4. Agora no GitHub, vá em “Settings” e depois “SSH and GPG Keys”. Clique “New SSH key”. Informe um título para identificar o computador onde a a chave foi gerada e no campo “Key” cole todo o conteúdo do arquivo id_rsa.pub (que você abriu no Bloco de Notas)
5. ssh -T git@github.com (Para testar se deu certo )

# Push para o GitHub
1. Crie o repositório no Github
2. git init 
3. git status 
4. git add . 
5. git commit -m "mensagem"
6. git branch -M main (Munda a branch)
7. git remote add origin git@github.com:SiegfriedGhost/testando.git (Cria repositório remoto)
8. git push -u origin main
9. git checkout -b MinhaNovaBrach (Criar nova branch)