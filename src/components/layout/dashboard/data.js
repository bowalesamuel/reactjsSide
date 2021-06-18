import DashboardSVG from "../../../assets/svg/dashboard-icon.svg"
import PeopleSVG from "../../../assets/svg/people-icon.svg"
import SpecieSVG from "../../../assets/svg/species-icon.svg"
import StarshipSVG from "../../../assets/svg/starships-icon.svg"
// import VehicleSVG from "../../../assets/svg/vehicle-icon.svg"

export const Routes = {
  dashboard: "/app",
  starships: "/app/starships",
  people: "/app/people",
  vehicles: "/app/vehicles",
  species: "/app/species",
};

export const navigation = [
  { Icon: DashboardSVG, Name: "Dashboard", route: Routes.dashboard },
  { Icon: StarshipSVG, Name: "Starships", route: Routes.starships },
  { Icon: PeopleSVG, Name: "People", route: Routes.people },
  { Icon: PeopleSVG, Name: "Vehicles", route: Routes.vehicles },
  { Icon: SpecieSVG, Name: "Species", route: Routes.species },
  // { Icon: Logout, Name: "Log out", route: "" },
];

