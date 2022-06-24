class Matrix{
    static average(matrix){
        let s = 0;
        let t = 0;
        matrix.forEach((element) => {
            element.forEach((e) => {
                s+= e;
                t++;
            });
        });
        return s/t;
    }
    static transpose(matrix){
        var trans = [];
        matrix.forEach((row, y)=>{
            row.forEach((col, x)=>{
                if(!trans[x]){
                    trans[x][y] = col;
                }
            });
        });
        return trans;
    }
}
