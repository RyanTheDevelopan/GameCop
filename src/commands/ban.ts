import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class ban implements IBotCommand {

    private readonly _command = "ban"


    help (): string {

        return "(Dis is only for Admins & Mods btw) RYAN! USE BAN BUSTER!!";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            let mentionedUser = msgObject.mentions.users.first();
            let suppliedReason = args.slice(1).join(" ") || "";
            let banLog = `${msgObject.author.username}: ${suppliedReason}`;

            msgObject.delete(0); 

            if(!msgObject.member.hasPermission("BAN_MEMBERS")){
                msgObject.channel.send(`${msgObject.author.toString()}, try again once you have the "Ban Members" permission.`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
                return;
            }

            if(!mentionedUser)
            {
                msgObject.channel.send(`${msgObject.author.toString()}, please mention the user so I can ban them.`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
                return;
            }

            msgObject.guild.member(mentionedUser).ban(banLog)
                .then(console.log)
                .catch(console.error)
        }
    }
