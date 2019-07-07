import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class botinfo implements IBotCommand {

    private readonly _command = "bot-info"


    help (): string {

        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            var embed = new Discord.RichEmbed()
            .setTitle(`Made by IT Ryan#0138`)
    .addField(`**Amount Of Members**`, `${client.users.size}`) 
    .addField(`**Account Created**`, `July 6, 2018, 9:20 PM`) 
    .addField(`**Bot ID**`, `597235278024933389`) 
    .addField(`**Status:**`, `Online`) 
    .setThumbnail(`https://cdn.discordapp.com/avatars/597235278024933389/ce110cef97cfb1e73ecf7af89e808b52.png`)     
    .setColor(0x643C3C)
    msgObject.channel.send(embed);
        }
    }
