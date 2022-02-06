import SheetMusic from 'react-sheet-music';

export default function Sheet() {
  return (
    <SheetMusic
      // Textual representation of music in ABC notation
      // The string below will show four crotchets in one bar
      notation="|EGBF|"
    />
  );
}
