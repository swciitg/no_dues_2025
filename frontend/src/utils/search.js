export function searchFilter(text,searchKey) {
        if(!searchKey || (searchKey.trim()).length==0) return true;
        let j=0;
        for(let i=0;i<text.length;i++) {
            if((text.toLowerCase())[i]==(searchKey.toLowerCase())[j]) j++;
            if(j==searchKey.length) return true;
        }
        return false;
    }