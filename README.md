<h1 align="center">
      <br>REST API Country Data Lookup Service
  <br/>
</h1>

GitHub is where people build software, learn and share ideas. In this project I am looking to learn things, i'm on the 2nd year of informatics engineering at the [Polytechnic Institute of Bragança](http://portal3.ipb.pt/index.php/en/ipben/home) and it is highly appreciated if you could contribute, please reach me out with a pull request.

## 📑 Supported Inputs

These are the supported parameters you can lookup for a country data:

-  ISO2 (PT, US, GB)
-  Dial Code (+351, +1, +44)
-  Name (Portugal, United States, United Kingdom)

## 💻 Usage

These are the supported requests following the previous supported inputs

💙 Request
```
{ "dial_code": "+351" }
```
```
{ "iso": "pt" }
```
```
{ "name": "portugal" }
```
💚 Response
```
{
  "lookup": [
    {
      "name": "Portugal",
      "dial_code": "+351",
      "code": "PT"
    }
  ]
}
```
The representation illustrated above is a POST request made in the following Vercel repository URL which is published publically.
- [country-dial-lookup.vercel.app/api](https://country-dial-lookup.vercel.app/api) 

> GET methods are also supported, here's how to do it:
- [country-dial-lookup.vercel.app/api/dial/351](https://country-dial-lookup.vercel.app/api/dial/351) 
- [country-dial-lookup.vercel.app/api/iso/PT](https://country-dial-lookup.vercel.app/api/iso/PT) 
- [country-dial-lookup.vercel.app/api/iso/pt](https://country-dial-lookup.vercel.app/api/iso/pt) 
- [country-dial-lookup.vercel.app/api/name/Portugal](https://country-dial-lookup.vercel.app/api/name/Portugal) 
- [country-dial-lookup.vercel.app/api/name/portugal](https://country-dial-lookup.vercel.app/api/name/Portugal) 

## 🚀 Technologies

This project was built using the following technologies:

-  [Vercel](https://vercel.com/)
-  [VS Code](https://code.visualstudio.com/)
-  [Insomnia REST](https://insomnia.rest/)

## 📄 Licensing

This repository is MIT licensed, as found in the [LICENSE][l] file.

[Country Dial Lookup](https://github.com/kfbfarley/country-dial-lookup/) has no documentation, just this repository.

[l]: https://github.com/kfbfarley/country-dial-lookup/blob/master/LICENSE