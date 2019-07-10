import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class help implements IBotCommand {

    private readonly _command = "help"


    help (): string {

        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            var embed = new Discord.RichEmbed()
        .addField("kick", "Kick the mentioned member")
        .addField("ban", "Ban the mentioned member")
        .addField("purge", "Purge the chat")
        .addField("bot-info", "Info about this bot account")
        .addField("say", "Have me say something.")
        .addField("hi", "Have me greet you.")
        .addField("bye", "Well, goodbye.")
            .setColor(0x643C3C)
            msgObject.channel.send(embed);
    }
}
