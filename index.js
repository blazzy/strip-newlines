const matchWhitespace = /\s*\n\s*/g;

function strip(str) {
  return str.replace(matchWhitespace, ' ');
}

export default function(strings, ...values) {
  let result = strip(strings[0]);
  const len = values.length;

  for (let i = 0; i < len; ++i) {
    result += values[i] + strip(strings[i + 1]);
  }

  return result.trim();
}
