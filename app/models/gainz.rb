class Gainz

    # Our unique data base url
     DATABASE_URL = 'postgres://kcmranatsnkrqx:2d51d471383160ce3ae3ec1f11e1f3add50a287c4f9384abb92841193b39e9be@ec2-54-243-47-196.compute-1.amazonaws.com:5432/daqc908ate9rgm'
    
    #  Code to handle either the cloud database or local DB connection
    if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect(host: "localhost", port: 5432, dbname: 'groupproject_development')
    end


    # Index route
    def self.all
        results = DB.exec("SELECT * FROM exercise;")
        return results.map do | result |
            {
                "id" => result["exercise_id"].to_i,
                "name" => result["exercise_name"],
                "weight" => result["target_weight"].to_i,
                "sets" => result["target_sets"].to_i,
                "reps" => result["target_reps"].to_i
            }
        end
    end

    # Show route
    def self.find(id)
        result = DB.exec("SELECT * FROM exercise WHERE exercise_id=#{id};")
        return {
            "id" => result.first["exercise_id"].to_i,
                "name" => result.first["exercise_name"],
                "weight" => result.first["target_weight"].to_i,
                "sets" => result.first["target_sets"].to_i,
                "reps" => result.first["target_reps"].to_i
        }
    end

    def self.delete(id)
        result = DB.exec("DELETE FROM exercise WHERE exercise_id=#{id};")
        return {
            "deleted": true
        }
    end
end