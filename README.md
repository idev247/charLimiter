#Char Limiter jQuery Plugin#

The Char Limiter is a plugin that limits the amount of characters in input and textarea, with the option of generating an automatic counter or you can create the counter and inform its class.

##Dependencies##

* [jQuery 1.7+](http://jquery.com/download/)

##Usage##

###Basic Form###
Just to Limit the characters. Each counter can be limited individually through the attribute `maxlength`.
```javascript
$(".input").charLimiter();
```
And just add the HTML maxlength attribute for both input and textarea
```html
<input type="text" class="input" maxlength="10" />
<input type="text"  class="input" maxlength="20" />
```
###Options###
* **counterClass** (default: "counter"): Class counter. Only class as selector.
* **generateCounter** (default: false): Generates a counter, automatic, if `true`.
* **insert** (default: "after"): Position on the counter is generated automatically inserted. Values ​​can be `after` ou `before`. 

<<<<<<< HEAD
####Creating Your Own Counter####
If you want to create your own counter in a different position of the two possible through the `insert` you can create the place where you want the counter to appear and add the attribute `data` counter-rel in the field that you are limiting and also where the count will appear. This attribute data is what makes the connection between the two.
=======
####Criando o seu Próprio Contador####
Caso você queira criar seu próprio contador, em uma posição diferente das duas possíveis através da opção `insert` você pode criar o lugar onde você quer que apareça o contador e adicione o atributo `data-counter-rel` no campo que você está limitando e também no local onde irá aparecer o contador. Esse atributo data é o que faz a ligação entre os dois. Deve-se também adicionar a classe ao contador, sendo ela a **Default** ou a que você adicionar como option.
>>>>>>> b8113de36b251b051f763a5c9b000cad69cda255

Exemplo:
```javascript
$('#input').charLimiter();
```

```html
<input data-counter-rel="contador" type="text" id="input" maxlength="15" />
<<<<<<< HEAD
<p>The counter will not be inserted immediately after the input but after the P</p>
<span data-counter-rel="contador"></span>
=======
<p>O contador não será inserido logo após o input mas sim depois do P</p>
<span class="counter" data-counter-rel="contador"></span>
>>>>>>> b8113de36b251b051f763a5c9b000cad69cda255
```
And then we have the counter.
