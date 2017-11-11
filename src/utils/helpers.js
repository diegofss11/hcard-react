const hCardConverter = (element) => {
  // NECESSARY to use a Serializer because hCard is XHTML based
  // Otherwise, copying HTML will end up in HTML inconsistent.
  
  const hCard = new XMLSerializer().serializeToString(element);

  window.open('data:application/octet-stream;base64,' + btoa(hCard));
}

module.exports = {
  hCardConverter
}