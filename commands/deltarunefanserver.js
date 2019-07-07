"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class deltarunefanserver {
    constructor() {
        this._command = "deltarunefanserver";
    }
    help() {
        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.delete(0);
        msgObject.channel.send(`Hey, you all. Here's another one of my servers, the Deltarune Fan Server! It's a server where you could just join and chat about Deltarune. Anyway, here's the invite:
    https://discord.gg/WPqPBkK`);
    }
}
exports.default = deltarunefanserver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsdGFydW5lZmFuc2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2RlbHRhcnVuZWZhbnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQXFCLGtCQUFrQjtJQUF2QztRQUVxQixhQUFRLEdBQUcsb0JBQW9CLENBQUE7SUFrQmhELENBQUM7SUFmRCxJQUFJO1FBRUEsT0FBTyw0RUFBNEUsQ0FBQztJQUN4RixDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7K0JBQ0osQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Q0FDSjtBQXBCTCxxQ0FvQksifQ==