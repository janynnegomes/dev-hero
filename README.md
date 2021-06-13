# Dev Hero

Esse projeto contém um site simples, com vários recursos visuais e já vem configurado para otimização de performance utilizando vários plugins do automatizador de tarefas **Gulp**.

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