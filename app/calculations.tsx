import * as C from "./constants"

export const calculateWheelInertia = (wheelDia: string, wheelWt: string): string => {
    wheelDia = (wheelDia ==="") ? "0" : wheelDia
    wheelWt = (wheelWt ==="") ? "0" : wheelWt
    const wheelRad_m = parseFloat(wheelDia) * C.METER_PER_INCH / 2                                  //  console.log('wheel radius in meters: ' + wheelRad_m)
    const wheelMass_kg = parseFloat(wheelWt) * C.KILOGRAM_PER_POUND                                  //console.log('tire mass in kilograms: ' + wheelMass_kg)
    const spokeInertia = C.SPOKE_MASS_PERCENTAGE* (1/2) * wheelMass_kg * (wheelRad_m*wheelRad_m +C.HUB_RADIUS_METERS *C.HUB_RADIUS_METERS)  //console.log("spokeInertia is " + spokeInertia)
    const hubInertia = C.HUB_MASS_PERCENTAGE * (1/2) * wheelMass_kg *C. HUB_RADIUS_METERS *C.HUB_RADIUS_METERS                              //console.log("hub inertia is " + hubInertia)
    const rimInertia = C.RIM_MASS_PERCENTAGE * wheelMass_kg * wheelRad_m * wheelRad_m                            //console.log("RIM inertia is " + rimInertia)
    const wheelInertia = (rimInertia + spokeInertia + hubInertia).toFixed(1)
    return wheelInertia
}
