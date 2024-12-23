const userUtils = {
    generateToken: (length: any) => {
        let a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
        let b = [];
        for (let i= 0; i < length; i++) {
            const j: any = (Math.random() * (a.length-1)).toFixed(0);
            b[i] = a[j];
        }
        return b.join('');
    }
};

export default userUtils;