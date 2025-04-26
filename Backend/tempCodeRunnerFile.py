@app.route('/characters/search', methods=['GET'])
# def search_character():
#     query = request.args.get('query', '').strip()
#     if not query:
#         return jsonify({"error": "Query parameter is required"}), 400

#     # Search by ID or name
#     character = None
#     if query.isdigit():  # If the query is numeric, search by ID
#         character = Character.query.filter_by(id=int(query)).first()
#     else:  # Otherwise, search by name
#         character = Character.query.filter_by(name=query).first()

#     if character:
#         return jsonify({
#             "id": character.id,
#             "name": character.name,
#             "alias": character.alias,
#             "alignment": character.alignment,
#             "powers": character.powers,
#             "image_url": character.image_url
#         })
#     else:
#         return jsonify({"error": "Character not found"}), 404