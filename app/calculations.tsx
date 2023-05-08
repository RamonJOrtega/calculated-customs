import * as C from "./constants"

export const calcWheelInertia = (wheelDia: string, wheelWt: string): string => {
    [wheelDia, wheelWt] = [wheelDia || "0", wheelWt || "0"]
    const wheelRad_m = parseFloat(wheelDia) * C.METER_PER_INCH / 2                                  //  console.log('wheel radius in meters: ' + wheelRad_m)
    const wheelMass_kg = parseFloat(wheelWt) * C.KILOGRAM_PER_POUND                                  //console.log('tire mass in kilograms: ' + wheelMass_kg)
    const spokeInertia = C.SPOKE_MASS_PERCENTAGE* (1/2) * wheelMass_kg * (wheelRad_m*wheelRad_m +C.HUB_RADIUS_METERS *C.HUB_RADIUS_METERS)  //console.log("spokeInertia is " + spokeInertia)
    const hubInertia = wheelDia == "0" ? 0 : C.HUB_MASS_PERCENTAGE * (1/2) * wheelMass_kg *C.HUB_RADIUS_METERS *C.HUB_RADIUS_METERS                              //console.log("hub inertia is " + hubInertia)
    const rimInertia = C.RIM_MASS_PERCENTAGE * wheelMass_kg * wheelRad_m * wheelRad_m                            //console.log("RIM inertia is " + rimInertia)
    const wheelInertia = (rimInertia + spokeInertia + hubInertia).toFixed(1)
    return wheelInertia
}

export const calcTotalInertia = (tireInertia: string, wheelInertia: string): string => {
    [tireInertia, wheelInertia] = [tireInertia || "0", wheelInertia || "0"]
    const totalInertia = (parseFloat(tireInertia) + parseFloat(wheelInertia)).toFixed(1)
    return totalInertia
}

export const calcTireInertia = (tireDia: string, tireWt: string, wheelDia: string, isStdNtn: boolean, aspRat: string, tireWd: string): string => {
    [tireDia, tireWt, wheelDia, aspRat, tireWd] = [tireDia || "0", tireWt || "0", wheelDia || "0", aspRat || "0", tireWd || "0"]
    if (isStdNtn) {
        tireDia = calcTireDiaFromStdNotation(aspRat, tireWd, wheelDia)
    }
        const tireRad_m = parseFloat(tireDia) * C.METER_PER_INCH/2                          // console.log('tire radius in meters: ' + tireRad_m)
        const tireMass_kg = parseFloat(tireWt) * C.KILOGRAM_PER_POUND                        // console.log('tire mass in kilograms: ' + tireMass_kg)
        const treadInertia = C.TREAD_MASS_PERCENTAGE* tireMass_kg * tireRad_m * tireRad_m                     // console.log('treadInertia in kg*m^2: ' + treadInertia)
        const wheelRad_m = parseFloat(wheelDia) * C.METER_PER_INCH / 2
        const sidewallInertia = C.SIDEWALL_MASS_PERCENTAGE * (1/2) * tireMass_kg * (tireRad_m * tireRad_m + wheelRad_m * wheelRad_m)// console.log('sidewallInertia in kg*m^2: ' + sidewallInertia)
        const tireInertia = (treadInertia + sidewallInertia).toFixed(1)
        return tireInertia
    
}

export const calcTireDiaFromStdNotation = (aspRat: string, tireWd: string, wheelDia: string): string => {
    if (aspRat === "0" || tireWd === "0" || wheelDia === "0") {return "0"}
    const sideWallHeight_in =  parseFloat(aspRat) / 100 * parseFloat(tireWd) / 25.4;
    const tireDiameter =  (parseFloat(wheelDia) + 2 * sideWallHeight_in).toFixed(1)
    return tireDiameter;
}

