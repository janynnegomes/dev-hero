# Dev Hero

Esse projeto contém um site simples, com vários recursos visuais e já vem configurado para otimização de performance utilizando vários plugins do automatizador de tarefas **Gulp**.

![janynnegomes github io_dev-hero_(iPad Pro)](https://user-images.githubusercontent.com/810723/121822903-18413300-cc78-11eb-9f17-ebab1afe55af.png)

## Dependências

* Gulp 
* [Gulp Clean](https://www.npmjs.com/package/gulp-clean)
* [Gulp Concat](https://www.npmjs.com/package/gulp-concat)
* [Gulp Imagemin](https://www.npmjs.com/package/gulp-imagemin)
* [Gulp Cssmin](https://www.npmjs.com/package/gulp-cssmin)
* [Gulp Htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
* [Gulp Usemin](https://www.npmjs.com/package/gulp-usemin)
* [Gulp Uglify](https://www.npmjs.com/package/gulp-uglify)
* [BrowserSync](https://www.npmjs.com/package/browser-sync)
* [Sass](https://www.npmjs.com/package/sass)
* [Node Sass](https://www.npmjs.com/package/node-sass)

## Instalação
Execute o comando ``` npm install```

## Execução
Execute o comando ``` npm run serve```.

Acesse o endereço local: http://localhost:3000 para navegar pelo site. O navegador irá atualizar a página à cada vez que for salvo um arquivo na pasta ``` src ```

## Build

Execute o comando ``` npm run build```.

Será gerada uma pasta  ``` dist ```com os arquivos prontos para serem publicados em um servidor web.

Os arquivos estarão otimizados com a redução do peso e unificação de alguns scripts e CSS.

## Deploy

Execute o comando ``` docker-compose -f "docker-compose.yml" up -d --build  ``` para subir o container com a aplicação original e também na versão otimizada para então fazer as comparações do resultado final.

* Site Otimizado - (http://localhost:8080)[http://localhost:8080]
* Site Original não otimizado - (http://localhost:8080)[http://localhost:8082]

## Checklist para otimização
- aplicar sprites nas imagens
- aplicar versionamento nos assets (Gulp Rev)
- ativar Gzip no servidor: ok
- ativar cache-control no servidor para os assets
- paralelizar requests servindo assets em domínios/subdomínios diferentes : ok (URL de imagens vindo do servidor http://localhost:8081)

## Resultado de performance no PageSpeed Insights

![PageSpeed-Insights](https://user-images.githubusercontent.com/810723/121823169-ca2d2f00-cc79-11eb-8918-0da6b1177b0e.png)


## Resultado de performance no WebPageTest
https://www.webpagetest.org/result/210613_AiDcE5_4373e7fbe5ef95e20921ffff0664563a/ 

![WebPageTest-Test-Result-Sao-Paulo-jany-ithub-io-dev-hero-06-13-21-19-12-53](https://user-images.githubusercontent.com/810723/121823510-ff3a8100-cc7b-11eb-84ef-f8db9a68e7f3.png)

