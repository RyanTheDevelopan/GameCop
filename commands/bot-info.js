"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class botinfo {
    constructor() {
        this._command = "bot-info";
    }
    help() {
        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        var embed = new Discord.RichEmbed()
            .setTitle(`Made by IT Ryan#0138`)
            .addField(`**Amount Of Members**`, `${client.users.size}`)
            .addField(`**Account Created**`, `July 6, 2018, 9:20 PM`)
            .addField(`**Bot ID**`, `597235278024933389`)
            .addField(`**Status:**`, `Online`)
            .setThumbnail(`https://cdn.discordapp.com/avatars/597235278024933389/ce110cef97cfb1e73ecf7af89e808b52.png`)
            .setColor(0x643C3C);
        msgObject.channel.send(embed);
    }
}
exports.default = botinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LWluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvYm90LWluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0M7QUFJdEMsTUFBcUIsT0FBTztJQUE1QjtRQUVxQixhQUFRLEdBQUcsVUFBVSxDQUFBO0lBd0J0QyxDQUFDO0lBckJELElBQUk7UUFFQSxPQUFPLDRFQUE0RSxDQUFDO0lBQ3hGLENBQUM7SUFFRyxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFHekUsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2FBQ2xDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQzthQUN4QyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3pELFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSx1QkFBdUIsQ0FBQzthQUN4RCxRQUFRLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDO2FBQzVDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO2FBQ2pDLFlBQVksQ0FBQyw0RkFBNEYsQ0FBQzthQUMxRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDbkIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNKO0FBMUJMLDBCQTBCSyJ9