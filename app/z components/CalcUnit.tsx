interface CalcUnitProps {
  isVisible: boolean;
  unit: string;
  isStandardNotatation?: boolean;
}

export default function CalcUnit({ isVisible, unit }: CalcUnitProps) {
  return isVisible ? (
    <div className="pr-1 text-sm text-neutral-700">
      {unit === 'kgm2' ? (
        <span>
          kg&bull;m<sup>2</sup>
        </span>
      ) : (
        unit
      )}
    </div>
  ) : null;
}
