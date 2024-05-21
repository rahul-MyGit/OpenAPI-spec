// use below in other BE/ node process:

import { DefaultService } from "../Generatedclients/generated";


async function main() {

    const res = await DefaultService.getUser("12");
    console.log(res);
    
}

main();