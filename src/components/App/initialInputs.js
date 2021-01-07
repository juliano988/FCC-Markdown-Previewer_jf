let initialInput =

`# Welcome to my Markdown Previewer!
 
Here is the place where you can write your text in a very simple way and get in return a formatted text! Where you can place it in a text editor, like Word, for example.

First let's take a look at the page itself. On it, you have three ***menu items***, which are:
1. The **Select menu bar**, where you can change the position of the windows to:
>- **Side by side**
>- **Top of each other**
2. The **Range bar**, where you can change the size of the ***Editor*** and ***Preview*** window.
3. And two buttons next to the **Range bar**, where you can completely hide the ***Editor*** and ***Preview*** window.

- Note: The ***menu items*** can be in different positions:
>1. If you open the page in your **computer**, all of them will be at the top of the page, above the title.
>2. If you open the page on your **smartphone** or **tablet**, the **Select menu bar** will be at the top of the page, and the others ***menu items*** will be at the bottom of it.

So now, lets take a look in what we can do here:

## Titles:

The easiest ways to insert some titles are:
- The biggest title inserting the <kbd>=</kbd> character under of your title.
-And the second biggest title inserting <kbd>-</kbd> character under of your title.

You can make your title in other way also, inserting the <kbd>#</kbd> in the beginning of the title in a sequence, like:
# 1. # Title
## 2. ## Title
### 3. ### Title
#### 4. #### Title
##### 5. ##### Title
###### 6. ###### Title
- **Note 1. You can insert in a sequence as many as you want <kbd>=</kbd> and <kbd>-</kbd> characters, but always in the same line!**
- **Note 2. Don't forget to insert the _space_ between the <kbd>#</kbd> character and the title.**

## Text style:

You can also have your text in _italic_, **bold**, or ***both***, to do it, you just need to write your text using the following rules:
- _italic:_ inserting <kbd>⎽</kbd> character in the beginning and in the end of the text.
- **bold:** inserting <kbd>✶</kbd><kbd>✶</kbd> characters in the beginning and in the end of the text.
- ***both:*** inserting <kbd>✶</kbd><kbd>✶</kbd><kbd>✶</kbd> or <kbd>⎽</kbd><kbd>⎽</kbd><kbd>⎽</kbd> characters in the beginning and in the end of the text.

## Left spacing:

>If you want to insert some left spacing in your text, just insert the <kbd>></kbd> character in the beginning of the line.
>>If you want a larger space, just add another one <kbd>></kbd><kbd>></kbd> character.
>>>>> You can insert as many as you want <kbd>></kbd> characters in your text in a sequence!

-   **Note: the <kbd>Tab</kbd> keyboard button will not work here as expected.**

Thematic breaks:
-
If you want to insert some thematic breaks in your text, just insert these characters:
- <kbd>✶</kbd><kbd>✶</kbd><kbd>✶</kbd>
-  <kbd>-</kbd><kbd>-</kbd><kbd>-</kbd>
- <kbd>⎽</kbd><kbd>⎽</kbd><kbd>⎽</kbd>

And the result will be:

***
---
___

See? We got three thematic breaks in a sequence!

## Links:

If you want to insert a link in your page, you can write it in one of these ways:

1. _[ The name of the link ] (https://somepage.com "some text when your hover it")_
2. _[ The name of the link ] (https://somepage.com)_
3. _https://somepage.com_

Here are the examples of it:

1. [Google](https://www.google.com/ "Click here to access Google!")
2. [Google](https://www.google.com/) 
3. https://www.google.com/

- **Note: you need to remove the space after the <kbd>[</kbd> character and the spaces between the <kbd>]</kbd> character.**

## Image:

Inserting an image is almost the same thing as inserting a link:

1. _![] (https://someimage.jpg "some text when you hover it")_
2. _![] (https://someimage.jpg)_

Here are the examples of it:

1. ![](https://media-exp1.licdn.com/dms/image/C4E0BAQGLKj3JHcof0w/company-logo_200_200/0?e=1611187200&v=beta&t=RcwtdOOM8wWC5w7k-Efmy-DwuOMicnMnvA5lXsVEofs "freeCodeCamp logo")
2. ![](https://media-exp1.licdn.com/dms/image/C4E0BAQGLKj3JHcof0w/company-logo_200_200/0?e=1611187200&v=beta&t=RcwtdOOM8wWC5w7k-Efmy-DwuOMicnMnvA5lXsVEofs)

- **Note 1. This time you need to insert the <kbd>!</kbd> character before everything.**
- **Note2. You don't need to write anything between the <kbd>[</kbd><kbd>]</kbd> characters, but if you want, feel free to do so.**
- **Note3. You need to remove the space after the <kbd>]</kbd> character.**

## Code:

There are two ways to write a code using this Markdown, a **inline code** and a **multiline code**:

1. **inline code:** 
‎
>\`\`
>var example = "This is just an example of a inline code";
>\`\`

2. **multiline code:**

>\`\`\`
>//Here is an example of a multiline code:
>if( youWriteMultilineCodeCorrectly == true ){
>    console.log( "Perfect! You did it correctly!" );
>}else{
>    console.log( "Something went wrong, please review your code");
>}
>\`\`\`

- **Note 1. Take a look at the editor window to understand better how to write an inline and multiline code.**
- **Note 2. There is no way to write an HTML code, if you really want to, insert the [Empty](https://emptycharacter.com/) char or any other one before each line.‎**

## Final considerations:


- I hope you enjoyed my **Markdown Previewer**. And fell free to use it as much as you want! 😊
- The **Markdown** project has a lot of interesting features! I only showed you some of them. To check out all of its power, take a look at the [complete manual](https://spec.commonmark.org/0.29/).
- And if you want to get deeper, take a look at the [documentation](https://marked.js.org/) and the [Git Hub page](https://github.com/markedjs/marked) of the project.
- And because I used the [Bootstrap](https://getbootstrap.com/) to make this page, inevitably it changes the output result. I've tried to manipulate its side effects to give to this page the most faithful and pretty output result. If you want to check out your input text on the [official Markdown Previewer](https://marked.js.org/demo/), fell free to compare the results. 😂
- And then that's it, see ya! 👊👊`;

let initialSizeWindow;
let initialSelectElemState;
let initialBtnLeftChar;
let initialBtnRightChar;

if(window.screen.width >= 768){
  initialSizeWindow = 40;
  initialSelectElemState = 'SBS';
  initialBtnLeftChar = '˂';
  initialBtnRightChar = '˃';
}else{
  initialSizeWindow = 40;
  initialSelectElemState = 'TOEO';
  initialBtnLeftChar = '˄';
  initialBtnRightChar = '˅';
}

export { initialInput , initialSizeWindow , initialSelectElemState , initialBtnLeftChar , initialBtnRightChar };