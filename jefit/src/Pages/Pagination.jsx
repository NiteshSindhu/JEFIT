import { Button } from "@chakra-ui/react";
export default function Pagination(props) {
  const { current, onChange, total } = props;
  const prev = (
    <Button
      disabled={current === 1}
      onClick={() => onChange(current - 1)}
      ml={10}
    >
      Prev
    </Button>
  );
  const next = (
    <Button
      disabled={current === total}
      onClick={() => onChange(current + 1)}
      ml={10}
    >
      Next
    </Button>
  );
  const pages = new Array(total).fill(0).map((a, i) => (
    <Button
      disabled={current === i + 1}
      onClick={() => onChange(i + 1)}
      ml={10}
    >
      {i + 1}
    </Button>
  ));
  return (
    <div style={{ margin: "auto", display: "block", width: "50%", gap: "6px" }}>
      {prev}
      {pages}
      {next}
    </div>
  );
}
