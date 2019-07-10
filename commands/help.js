"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class help {
    constructor() {
        this._command = "help";
    }
    help() {
        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        var embed = new Discord.RichEmbed()
            .addField("kick", "Kick the mentioned member")
            .addField("ban", "Ban the mentioned member")
            .addField("purge", "Purge the chat")
            .addField("bot-info", "Info about this bot account")
            .addField("say", "Have me say something.")
            .addField("hi", "Have me greet you.")
            .addField("bye", "Well, goodbye.")
            .setColor(0x643C3C);
        msgObject.channel.send(embed);
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBSXRDLE1BQXFCLElBQUk7SUFBekI7UUFFcUIsYUFBUSxHQUFHLE1BQU0sQ0FBQTtJQXlCdEMsQ0FBQztJQXRCRyxJQUFJO1FBRUEsT0FBTyw0RUFBNEUsQ0FBQztJQUN4RixDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTthQUN0QyxRQUFRLENBQUMsTUFBTSxFQUFFLDJCQUEyQixDQUFDO2FBQzdDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLENBQUM7YUFDM0MsUUFBUSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQzthQUNuQyxRQUFRLENBQUMsVUFBVSxFQUFFLDZCQUE2QixDQUFDO2FBQ25ELFFBQVEsQ0FBQyxLQUFLLEVBQUUsd0JBQXdCLENBQUM7YUFDekMsUUFBUSxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQzthQUNwQyxRQUFRLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDO2FBQzdCLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNuQixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0o7QUEzQkQsdUJBMkJDIn0=