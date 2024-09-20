interface TestProps {
  count: number;
}
const Test = ({ count }: TestProps) => {
  return <h1>{count}</h1>;
};

export default Test;
