import yaml from "js-yaml"

/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {

	let data = yaml.load(await (await fetch("/public/config/config.yaml")).text());

	return data;

}