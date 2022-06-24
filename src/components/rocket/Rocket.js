export default function Rocket({item:{mission_name, launch_year, links:{mission_patch_small}}}){
    return (
        <div>
<h2>{mission_name}</h2>
<h2>{launch_year}</h2>
            <img src={mission_patch_small} alt={mission_name}/>
            <hr/>
        </div>
    )
}