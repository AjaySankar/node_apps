let command = process.argv[2]  || '';
console.log('Command: '+command);

if(command == ''){
  console.log('Command is empty');
}
else if(command == 'add'){
  console.log('Command is Add');
}
else if(command == 'list'){
  console.log('Command is List');
}
else if(command == 'read'){
  console.log('Command is Read');
}
else if(command == 'remove'){
  console.log('Command is Remove');
}
else{
  console.log('Command is not recognized');
}