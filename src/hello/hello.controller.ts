// hello.controller.ts

import {Controller, Logger, Get, NotFoundException, Param} from "@nestjs/common"

@Controller()
export class HelloController{
        /* a logger from nestjs for logging error/other info */
    logger: Logger = new Logger(HelloController.name)
    db: {id: string, message: string}[] = []; // temporary database

    @Get("hello")
    async replyHello() {
        try {
            return "Hello";
        } catch (error) {
            this.logger.error(error?.message ?? "");
            throw error;
        }
    }

    @Get("hello/:helloId") // dyanmic parameter just like express, koa-router etc...
        async replyExactHello(
           /*pass the same dynamic parameter from "hello/:helloId" in 
             @Param decorator's first to let nestjs find the parameter
             correctly
            */
           @Param("helloId") id: string
        ) {
        try {
            /*returning the correct temp hello message*/
            const message = this.db.find(hello=>hello.id===id)?.message
            if(!message) throw new NotFoundException("desired `hello` not found") //404 error
            return message;
        } catch (error) {
            /* will log the error & autmatically send the error as response with all required data */
            this.logger.error(error?.message ?? "");
            throw error;
        }
    }
}