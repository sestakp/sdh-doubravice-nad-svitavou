


function dateSort(a,b){
        // Sort logic here based on the date field
        const dateA = new Date(
          parseInt(a.date.split(".")[2]), // Year
          parseInt(a.date.split(".")[1]) - 1, // Month (Note: Months in Date objects are zero-indexed)
          parseInt(a.date.split(".")[0]) // Day
        );
        const dateB = new Date(
          parseInt(b.date.split(".")[2]), // Year
          parseInt(b.date.split(".")[1]) - 1, // Month (Note: Months in Date objects are zero-indexed)
          parseInt(b.date.split(".")[0]) // Day
        );
        return dateB - dateA;
}


export default dateSort;