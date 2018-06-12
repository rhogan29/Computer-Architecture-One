/**
 * RAM access
 */
class RAM {
    constructor(size) {
        this.mem = new Array(size); // This is MAR!
        this.mem.fill(0);
    }

    /**
     * Write (store) MDR value at address MAR
     */
    write(MAR, MDR) {
        // !!! IMPLEMENT ME
        // write the value in the MDR to the address MAR
        this.mem[MAR] = MDR;  // MAR index in memory, MDR is value we want to store.
        // at inex MAR in the mem array, the value is MDR.   
        //Memory Address Register
        //Memory Data Register                
    }                                                      

    /**
     * Read (load) MDR value from address MAR
     * 
     * @returns MDR
     */
    read(MAR) {
        // !!! IMPLEMENT ME
        // Read the value in address MAR and return it
        return this.mem[MAR]; 
        // read whats at this MAR index, which is now set as MDR..
    }
}

module.exports = RAM;