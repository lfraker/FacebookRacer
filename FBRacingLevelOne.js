vae levelOne = {
	"metadata": {
		"version": 4.3,
		"type": "Object",
		"generator": "ObjectExporter"
	},
	"geometries": [
		{
			"uuid": "9F570E94-6C01-4A0C-A7C7-980A28A7C41F",
			"type": "PlaneGeometry",
			"width": 200,
			"height": 200,
			"widthSegments": 1,
			"heightSegments": 1
		},
		{
			"uuid": "99862555-39F6-4D22-8EB6-817B3181E63B",
			"type": "BoxGeometry",
			"width": 100,
			"height": 100,
			"depth": 100,
			"widthSegments": 1,
			"heightSegments": 1,
			"depthSegments": 1
		}],
	"materials": [
		{
			"uuid": "D888B99A-DCCB-4A7C-AB9A-C8B3040B8E54",
			"type": "MeshPhongMaterial",
			"color": 16777215,
			"ambient": 16777215,
			"emissive": 0,
			"specular": 1118481,
			"shininess": 30,
			"opacity": 1,
			"transparent": false,
			"wireframe": false
		},
		{
			"uuid": "23AB47D3-EADD-42DC-BACA-82E9B961B24E",
			"type": "MeshPhongMaterial",
			"color": 16777215,
			"ambient": 16777215,
			"emissive": 0,
			"specular": 1118481,
			"shininess": 30,
			"side": 2,
			"opacity": 1,
			"transparent": false,
			"wireframe": false
		},
		{
			"uuid": "60BC194C-5527-46ED-8EB6-5B043525E048",
			"type": "MeshPhongMaterial",
			"color": 16777215,
			"ambient": 16777215,
			"emissive": 0,
			"specular": 1118481,
			"shininess": 30,
			"opacity": 1,
			"transparent": false,
			"wireframe": false
		}],
	"object": {
		"uuid": "31230D3E-537C-4FA6-B732-6F1C95C1AD04",
		"type": "Scene",
		"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
		"children": [
			{
				"uuid": "0311FCE3-1361-4F52-84DD-D38CFC06351B",
				"name": "Plane 6",
				"type": "Mesh",
				"geometry": "9F570E94-6C01-4A0C-A7C7-980A28A7C41F",
				"material": "D888B99A-DCCB-4A7C-AB9A-C8B3040B8E54",
				"matrix": [2.4990506172180176,0,0,0,0,0.4748924672603607,-22.832109451293945,0,0,245.7964630126953,5.112400531768799,0,0,0,0,1]
			},
			{
				"uuid": "8D2E5AED-BA0D-41DA-AC9C-7007387CFB06",
				"name": "Box 8",
				"type": "Mesh",
				"geometry": "99862555-39F6-4D22-8EB6-817B3181E63B",
				"material": "23AB47D3-EADD-42DC-BACA-82E9B961B24E",
				"matrix": [0.23999999463558197,0,0,0,0,1.399999976158142,0,0,0,0,46.41675567626953,0,245.97000122070312,-5.889999866485596,8.880000114440918,1]
			},
			{
				"uuid": "C65328BF-779A-4D11-B1E2-70B4E8E47E1A",
				"name": "Box 8",
				"type": "Mesh",
				"geometry": "99862555-39F6-4D22-8EB6-817B3181E63B",
				"material": "60BC194C-5527-46ED-8EB6-5B043525E048",
				"matrix": [0.23999999463558197,0,0,0,0,1.399999976158142,0,0,0,0,46.41999816894531,0,-239.16000366210938,-5.889999866485596,8.880000114440918,1]
			}]
	}
}