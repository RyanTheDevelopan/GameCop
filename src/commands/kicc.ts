import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class kick implements IBotCommand {

    private readonly _command = "kick"


    help (): string {

        return "(Dis is only for Admins & Mods btw) He protecc, he attacc, but most importantly, he kicc meanies in the bacc.";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            let mentionedUser = msgObject.mentions.users.first();
            let suppliedReason = args.slice(1).join(" ") || "";
            let kickLog = `${msgObject.author.username}: ${suppliedReason}`;

            msgObject.delete(0); 

            if(!msgObject.member.hasPermission("KICK_MEMBERS")){
                msgObject.channel.send(`${msgObject.author.toString()}, try again once you have the "Kick Members" permission.`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
                return;
            }

            if(!mentionedUser)
            {
                msgObject.channel.send(`${msgObject.author.toString()}, please mention the user so I can kick them.`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
                return;
            }

            msgObject.guild.member(mentionedUser).kick(kickLog)
                .then(console.log)
                .catch(console.error)
        }
    }
