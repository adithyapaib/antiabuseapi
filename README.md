
# antiAbuseAPI

**antiAbuseAPI** is a serverless rest api deployed on vercel that takes in words seperated by  '_' or spaces and returns either true or false if the words sent to the endpoint contains any cuss words.

# Usage

Send your query string to the end [https://antiabuse-api.vercel.app/api/](https://antiabuse-api.vercel.app/api)

- If the string contains abuse words then the api will respond with JSON ```true```
- If the string contains does not abuse words then the api will respond with JSON ```false```


## Requirements

>````
>vercel CLI
>nodejs
>````


## Deployment

>````
>sudo npm i -g vercel
>git clone https://github.com/adithyapaib/antiabuseapi
>cd antiabuseapi
>npm i
>vercel dev
>````

## Words contribution

If you would like to contribute more words to this API your are free to so inside the ```api/gali.ts``` file.
*make  sure the words are in the array of strings format (follow the syntax).*

>**Syntax**

- If the word is in a language that has a variable named with it then and text is the word that you want to insert.<br>

- If the word is in a language that has a variable named with it then and text is the word that you want to insert.<br>

>```const  hindi: string[]  = [ "text", .....];```<br>
- If the word is in a language that  doesn't have a variable named with it then and text is the word that you want to insert.<br>

>````
>const  language_name: string[]  = [ "text", .....]; 
>let  language_nameGali: string[]  =  language_name.map(name  =>  name.toLowerCase());
>const  gali: string[]  =  [...hindiGali, ...tuluGali, ...language_nameGali];
>````


## :handshake: Our Contributors
<a href="https://github.com/adithyapaib/antiabuseapi/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=adithyapaib/antiabuseapi" />
</a>

 ## *Dont forget to star this repo and follow me!*
