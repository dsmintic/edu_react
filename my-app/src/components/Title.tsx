interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <span style={{ fontSize: 20 }}>{title}</span>;
}
