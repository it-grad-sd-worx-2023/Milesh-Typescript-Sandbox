//ici nous declar function ki pour fr travay display name
//la kan li ggne information la 


//ena 2 string akoz pour donne function la 1 return type string
//akoz sa ena 2 string 1 pour name 1 pour function la 
function formatName(name: string): string {
    return `My name is ${name}`;
  }
  

  // ici to declar to user so nom 
  const inputName = "Yeshan";
  // ici nom la pour sanzer
  const formattedString = formatName(inputName);
  //lerla to output result la pour formattedString
  console.log(formattedString);