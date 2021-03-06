import * as AWSAnalytics from "../icons/Arch_Analytics/Arch_32"
import * as AWSAppIntegration from "../icons/Arch_App-Integration/Arch_32"
import * as AWSARVR from "../icons/Arch_AR-VR/Arch_32"
import * as AWSBlockChain from "../icons/Arch_Blockchain/32"
import * as AWSBusinessApplication from "../icons/Arch_Business-Application/32"
import * as AWSCompute from "../icons/Arch_Compute/32"
import * as AWSContainers from "../icons/Arch_Containers/32"
import * as AWSCostManagement from "../icons/Arch_Cost-Management/32"
import * as AWSCustomerEnablement from "../icons/Arch_Customer-Enablement/32"
import * as AWSCustomerEngagement from "../icons/Arch_Customer-Enagagement/32"
import * as AWSDatabase from "../icons/Arch_Database/32"
import * as AWSDevTools from "../icons/Arch_Developer- Tools/32"
import * as AWSEndUserComputing from "../icons/Arch_End-User-Computing/32"
import * as AWSGameTech from "../icons/Arch_Game-Tech/32"
import * as AWSIOT from "../icons/Arch_Internet-of-Things/32"
import * as AWSMachineLearning from "../icons/Arch_Machine-Learning/32"
import * as AWSManagementGovernance from "../icons/Arch_Management-Governance/32"
import * as AWSMediaServices from "../icons/Arch_Media-Services/32"
import * as AWSMigrationTransfer from "../icons/Arch_Migration-Transfer/32"
import * as AWSNetworkingContent from "../icons/Arch_Networking-Content/32"
import * as AWSQuantumTechnlogies from "../icons/Arch_Quantum_Technologies/32"
import * as AWSRobotics from "../icons/Arch_Robotics/32"
import * as AWSSatellite from "../icons/Arch_Satellite/32"
import * as AWSSecurity from "../icons/Arch_Security-Identity-Compliance/32"
import * as AWSStorage from "../icons/Arch_Storage/32"
import tags from "data/tags"

const buildDataSetFromImport = (iconsAsImport, tags = "") => {
	return Object.keys(iconsAsImport).map(item => {

		const name = item
			.replace("Arch", "")
			.replace("Aws", "")
			.replace("Amazon", "")
			.replace("32", "")

		return {
			name,
			tags: [name.toLowerCase(), ...tags],
			svg: iconsAsImport[item],
			new: false,
		}
	})
}

const dataset = [
	...buildDataSetFromImport(AWSAnalytics, ["analytics"]),
].sort((a, b) => {
	const textA = a.name.toUpperCase()
	const textB = b.name.toUpperCase()
	return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
})

// Auto-generates tags based on a hyphenated name.
//
// "zoom" -> ["zoom"]
// "zoom-out" -> ["zoom-out", "zoomout", "zoom", "out"]
//
function autoTags(name) {
	const tags = name.split("-")
	if (tags.length === 1) {
		return tags
	}
	return [name, tags.join(""), ...tags]
}

;(() => {
	for (const each of dataset) {
		const auto = autoTags(each.name)

		const alt = tags[each.name]
		const altAuto = []
		if (alt !== undefined) {
			for (const each of alt) {
				altAuto.push(...autoTags(each))
			}
		}
		// const deduped = [...new Set([...auto, ...altAuto])]
		// each.tags.push(...deduped)
	}
})()

export default dataset
