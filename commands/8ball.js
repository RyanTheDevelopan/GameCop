"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = "8ball";
    }
    help() {
        return "Use the 8ball";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        var fortunes = [
            "Yes",
            "No",
            "Maybe so?",
            "Idk",
            "Frick no",
            "Maybe sometime",
            "Shut the fuck up",
            "https://cdn.discordapp.com/attachments/532701026042511362/575402909152313344/undertale_text_box.gif"
        ];
        if (args[1])
            msgObject.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else
            msgObject.channel.send("Heh. But could you, probably, ACTUALLY ask me an ACTUAL question?");
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGJhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvOGJhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUE2Qm5DLENBQUM7SUExQkQsSUFBSTtRQUVBLE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7SUFFRyxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFFekUsSUFBSSxRQUFRLEdBQUc7WUFDWCxLQUFLO1lBQ0wsSUFBSTtZQUNKLFdBQVc7WUFDWCxLQUFLO1lBQ0wsVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIscUdBQXFHO1NBQ3hHLENBQUM7UUFHRixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDdEYsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUVBQW1FLENBQUMsQ0FBQztJQUNyRyxDQUFDO0NBRUo7QUEvQkwsOEJBK0JLIn0=