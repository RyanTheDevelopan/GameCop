require('dotenv').config();
import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { IBotCommand } from './api';

const client: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];
loadCommands(`${__dirname}/commands`)

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`GameCop | Moderating ${client.users.size} members`)
})



// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === '🚪╿entrance');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`${member}`);
    channel.send(`**Welcome to Game City! Have a fun time here!**`);
});

client.on("guildMemberRemove", member => {
    const channel = member.guild.channels.find(ch => ch.name === '🚪╿exit')
    if (!channel) return;
    channel.send(`${member}`);
    channel.send(`Goodbye ${member}, hope you had a fun time here :frowning: :wave:`);
});


client.on("message", msg => {
    if (msg.author.bot) { return; }

    //Ignore the message if it was sent in a DM 
    if(msg.channel.type == "dm"){ return; }

    if (!msg.content.startsWith(ConfigFile.config.prefix)) { return; }

    //Handle the command
    handleCommand(msg); 
})


async function handleCommand(msg: Discord.Message){

    //Split the string into the command and all of the args
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);
    
    //Loop through all of our loaded commands
    for(const commandClass of commands){
        
        //Attempt to execute code but ready in case of a possible error
        try{
            
            //Check if our command class is the correct one
            if(!commandClass.isThisCommand(command)){
                
                //Go to the next iterarion of the loop if this isn't the correct command
                continue;
            }
            
            //Pause esecution whilst we run the command's code
            await commandClass.runCommand(args, msg, client);
        }
        catch(exception){

            //If there is an error, then log the exception
            console.log(exception);
        }
    }

}

function loadCommands(commandsPath: string) {
    //Exit if there are no commands
    if(!ConfigFile.config.commands || (ConfigFile.config.commands as string[]).length === 0) {return;}

    //Loop through all of the commands in our config file
    for(const commandName of ConfigFile.config.commands as string[]) {

        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandsClass() as IBotCommand;

        commands.push(command);
    }
}



client.login(process.env.DISCORD_TOKEN); 
