const hCardConverter = (element) => {
  // NECESSARY to use a Serializer because hCard is XHTML based
  // Otherwise, copying HTML will end up in HTML inconsistent.
  
  const hCard = new XMLSerializer().serializeToString(element);
  console.log(hCard);
}

module.exports = {
  hCardConverter
}