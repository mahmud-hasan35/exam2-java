function updateDate() {
    const dateElement = document.getElementById('date');
    const today = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = `${monthNames[today.getMonth()]} ${today.getDate()} ${today.getFullYear()}`;
    dateElement.innerText = formattedDate;
  }
  updateDate();