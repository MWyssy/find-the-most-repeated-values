function findTheMostRepeatedValue(array) {
  const result = {
    elements: [],
    repeats: null,
  };

  if (!array.length) return result;

  const repeatedValues = array.filter(
    (word1) => array.filter((word2) => word2 === word1).length > 1
  );

  if (repeatedValues.length) {
    repeatedValues.forEach((word) => {
      result.elements.push(word);
    });

    const repeatedWordDount = result.elements.reduce((sum, word) => {
      return { ...sum, [word]: (sum[word] || 0) + 1 };
    }, {});

    result.repeats = Object.values(repeatedWordDount).reduce((sum, count) => {
      if (count > sum) sum = count;
      return sum;
    }, 0);

    result.elements = [...new Set(result.elements)];
  }

  return result;
}

module.exports = findTheMostRepeatedValue;
