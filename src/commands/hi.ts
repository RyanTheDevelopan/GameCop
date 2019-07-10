import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class hi implements IBotCommand {

    private readonly _command = "hi"


    help (): string {

        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            msgObject.channel.send(`Hello ${msgObject.author.toString()}. :wave:`);
        }
    }