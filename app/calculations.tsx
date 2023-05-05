import * as C from "./constants"

export const calculateWheelInertia = (wheelDia: string, wheelWt: string): string => {
    wheelDia = (wheelDia ==="") ? "0" : wheelDia
    wheelWt = (wheelWt ==="") ? "0" : wheelWt
    const wheelRad_m = parseFloat(wheelDia) * C.METER_PER_INCH / 2                                  //  console.log('wheel radius in meters: ' + wheelRad_m)
    const wheelMass_kg = parseFloat(wheelWt) * C.KILOGRAM_PER_POUND                                  //console.log('tire mass in kilograms: ' + wheelMass_kg)
    const spokeInertia = C.SPOKE_MASS_PERCENTAGE* (1/2) * wheelMass_kg * (wheelRad_m*wheelRad_m +C.HUB_RADIUS_METERS *C.HUB_RADIUS_METERS)  //console.log("spokeInertia is " + spokeInertia)
    const hubInertia = wheelDia == "0" ? 0 : C.HUB_MASS_PERCENTAGE * (1/2) * wheelMass_kg *C.HUB_RADIUS_METERS *C.HUB_RADIUS_METERS                              //console.log("hub inertia is " + hubInertia)
    const rimInertia = C.RIM_MASS_PERCENTAGE * wheelMass_kg * wheelRad_m * wheelRad_m                            //console.log("RIM inertia is " + rimInertia)
    const wheelInertia = (rimInertia + spokeInertia + hubInertia).toFixed(1)
    return wheelInertia.toString()
}

export const calculateTotalInertia = (tireInertia: string, wheelInertia: string): string => {
    tireInertia = (tireInertia ==="") ? "0" : tireInertia
    wheelInertia = (wheelInertia ==="") ? "0" : wheelInertia
    tireInertia = (tireInertia ==="") ? "0" : tireInertia
    wheelInertia = (wheelInertia ==="") ? "0" : wheelInertia
    const totalInertia = (parseFloat(tireInertia) + parseFloat(wheelInertia)).toFixed(1)
    return totalInertia.toString()
}

export const calculateTireInertia = (tireDia: string, tireWt: string, wheelDia: string): string => {
    tireDia = (tireDia ==="") ? "0" : tireDia
    tireWt = (tireWt ==="") ? "0" : tireWt
    wheelDia = (wheelDia ==="") ? "0" : wheelDia
    const tireRad_m = parseFloat(tireDia) * C.METER_PER_INCH/2                          // console.log('tire radius in meters: ' + tireRad_m)
    const tireMass_kg = parseFloat(tireWt) * C.KILOGRAM_PER_POUND                        // console.log('tire mass in kilograms: ' + tireMass_kg)
    const treadInertia = C.TREAD_MASS_PERCENTAGE* tireMass_kg * tireRad_m * tireRad_m                     // console.log('treadInertia in kg*m^2: ' + treadInertia)
    const wheelRad_m = parseFloat(wheelDia) * C.METER_PER_INCH / 2
    const sidewallInertia = C.SIDEWALL_MASS_PERCENTAGE * (1/2) * tireMass_kg * (tireRad_m * tireRad_m + wheelRad_m * wheelRad_m)// console.log('sidewallInertia in kg*m^2: ' + sidewallInertia)
    const tireInertia = (treadInertia + sidewallInertia).toFixed(1)
    return tireInertia.toString()
}

export const calculateTireDiameterFromStandardNotation = (aspectRatio: string, tireWidth: string, wheelDiameter: string): string => {
    [aspectRatio, tireWidth, wheelDiameter] = [aspectRatio || "0", tireWidth || "0", wheelDiameter || "0"];

    const sideWallHeight_in = parseFloat(aspectRatio)/100 * parseFloat(tireWidth)/25.4
    const tireDiameter = (parseFloat(wheelDiameter) + 2*sideWallHeight_in)
    return tireDiameter.toString()
}