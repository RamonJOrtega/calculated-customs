interface CalcUnitProps {
    isVisible: boolean
    unit: string
    isStandardNotatation: boolean
}

export default function CalcUnit(props: any) {
    return props.isVisible ? (
      <div className= "text-neutral-700 text-sm pr-1" >
        {props.unit === "kgm2" ? (
         <div>kg&bull;m<sup>2</sup></div>
        ) : (
          props.unit
        )}
      </div>
    ) : null;
  }
  