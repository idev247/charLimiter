#Char Limiter jQuery Plugin#

O Char Limiter é um plugin que limita a quantidade de caracteres de input e textarea, tendo a opção de gerar um contador automático ou você pode criar o contador e informar sua classe.

##Revisões##

* V 1.1
* Data: 10/01/2013
* Adicionado dois Callbacks. `onCharsFull()` e `onCharsEmpty()`.

##Dependências##

* [jQuery 1.7+](http://jquery.com/download/)

##Uso##

###Forma Básica###
Apenas para Limitar os caracteres. Cada contador pode ser limitado individualmente através do atributo `maxlength`.
```javascript
$(".input").charLimiter();
```
E no HTML basta adicionar o atributo maxlength tanto para input como textarea
```html
<input type="text" class="input" maxlength="10" />
<input type="text"  class="input" maxlength="20" />
```
###Options###
* **counterClass** (default: "counter"): Classe do contador. Somente classe como seletor.
* **generateCounter** (default: false): Gera um contador automático se `true`.
* **insert** (default: "after"): Posição em que é inserido o contador gerado de forma automática. Valores podem ser `after` ou `before`. 
* **onCharsFull()** (default: empty): Callback quando todos caracteres são digitados.
* **onCharsEmpty()** (default: empty): Callback quando quaisquer caracteres não foram digitado.

####Criando o seu Próprio Contador####
Caso você queira criar seu próprio contador, em uma posição diferente das duas possíveis através da opção `insert` você pode criar o lugar onde você quer que apareça o contador e adicione o atributo `data-counter-rel` no campo que você está limitando e também no local onde irá aparecer o contador. Esse atributo data é o que faz a ligação entre os dois.

Exemplo:
```javascript
$('#input').charLimiter();
```

```html
<input data-counter-rel="contador" type="text" id="input" maxlength="15" />
<p>O contador não será inserido logo após o input mas sim depois do P</p>
<span data-counter-rel="contador"></span>
```
E então teremos o contador.