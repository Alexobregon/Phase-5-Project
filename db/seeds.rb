# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all


puts "Seeding..."

p1 = Product.create(name: "NVIDIA GEFORCE RTX 3090", price: 1499, description: "Cooling System: Fan, Boost Clock Speed: 1.70 GHz, GPU Memory Size: 24 GB", image_url: "https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3090.png")
p2 = Product.create(name: "GIGABYTE GeForce RTX 3090 EAGLE 24GB Video Card, GV-N3090EAGLE-24GD", price: 1499, description: "Cooling System: Triple fan, Boost Clock Speed: --, GPU Memory Size: 24 GB", image_url: "https://assets.nvidia.partners/images/png/GV-N3090EAGLE-24GD.png")
p3 = Product.create(name: "EVGA 24G-P5-3971-KR graphics card", price: 1639, description: "Cooling System: iCX3, Boost Clock Speed: 1695 MHz, GPU Memory Size: 24 GB", image_url: "https://assets.nvidia.partners/images/png/24G-P5-3971-KR.png")
p4 = Product.create(name: "EVGA - GeForce RTX 3090 XC3 ULTRA GAMING 24GB GDDR6 PCI Express 4.0 Graphics Card", price: 1799, description: "Cooling System: --Boost Clock Speed: --, GPU Memory Size: 24 GB", image_url: "https://assets.nvidia.partners/images/png/24G-P5-3975-KR.png")
p5 = Product.create(name: "ASUS TUF-RTX3090-24G-GAMING", price: 1874, description: "Cooling System: Triple Fan, Axial-Tech Boost Clock Speed: --, GPU Memory Size: 24 GB", image_url: "https://assets.nvidia.partners/images/png/DE_85935679_100516005_US.png")
p6 = Product.create(name: "MSI GeForce RTX 3080 VENTUS 3X 10G", price: 69999, description: "Cooling System: Triple Fan, Boost Clock Speed: 1710 MHz, GPU Memory Size: 10 GB", image_url: "https://assets.nvidia.partners/images/png/RTX-3080-VENTUS-3X-10G.png")
p7 = Product.create(name: "NVIDIA GEFORCE RTX 3080", price: 69999, description: "Cooling System: Fan, Boost Clock Speed: 1.71 GHz, GPU Memory Size: 10 GB", image_url: "https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3080.png")
p8 = Product.create(name: "NVIDIA GEFORCE RTX 3080 Ti", price: 119999, description: "Cooling System: Fan, Boost Clock Speed: 1.67 GHz, GPU Memory Size: 12 GB", image_url: "https://assets.nvidia.partners/images/png/3080-ti-back-300x198.png")
p9 = Product.create(name: "EVGA GeForce RTX 3080 XC3 Black", price: 81999, description: "Cooling System: iCX3, Boost Clock Speed: 1710 MHz, GPU Memory Size: 10 GB", image_url: "https://assets.nvidia.partners/images/png/10G-P5-3881-KR.png")

puts "Done!!"