
export { data_management }

class data_management {

    constructor() { this.heap = []; }   // constructor to initialize to zero

    insert(value) {
        console.log(value);
        this.heap.push(value);
        this.updation_of_maxHeap();
    }

    size() { return this.heap.length; }

    empty() { return ( this.size()===0 ); }

    //function to update maxheap
    updation_of_maxHeap() {
        let index = this.size() - 1;

        while (index > 0)
        {
            let element = this.heap[index],
                parentIndex = Math.floor((index - 1) / 2),
                parent = this.heap[parentIndex];

            if (parent[0] >= element[0])
            break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex
        }
    }

    extractMax() 
    {
        const max = this.heap[0];
        this.heap.shift();
     
        return max;
    }

    sinkDown(index) {

        let left = 2 * index + 1,
            right = 2 * index + 2,
            largest = index;
        const length = this.size();

        // console.log(this.heap[left], left, length, this.heap[right], right, length, this.heap[largest]);

        if (left < length && this.heap[left][0] > this.heap[largest][0]) {
            largest = left
        }
        if (right < length && this.heap[right][0] > this.heap[largest][0]) {
            largest = right
        }
        // swap
        if (largest !== index) {
            let tmp = this.heap[largest];
            this.heap[largest] = this.heap[index];
            this.heap[index] = tmp;
            this.sinkDown(largest)
        }
    }

}

